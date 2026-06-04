import trimesh
import numpy as np
from pathlib import Path
import sys

def clean_mesh(input_path: str, output_path:str)->dict:
    """网格清洁主函数"""
    mesh=trimesh.load(input_path,force='mesh')
    stats_before={
        'vertices':len(mesh.vertices),
        'faces': len(mesh.faces),
        'is_watertight': mesh.is_watertight,
        'is_manifold':mesh.is_manifold,
    }
    mesh.merge_vertices(merge_tol=1e-5)
    mask=mesh.area_faces>1e-8
    mesh.update_faces(mask)
    removed_degenerate = int((~mask).sum())
    trimesh.repair.fill_holes(mesh)
    is_manifold_after=mesh.is_manifold
    mesh.export(output_path)
    stats_after={
        'vertices':len(mesh.vertices),
        'faces': len(mesh.faces),
        'is_watertight':mesh.is_watertight,
        'is_manifold':is_manifold_after,
    }
    return {
        'status': 'success',
        'removed_degenerate': removed_degenerate,
        'before': stats_before,
        'after': stats_after,
    }

if __name__ == '__main__':
    inp = sys.argv[1]
    outp = sys.argv[2]
    res = clean_mesh(inp,outp)
    print(outp)
