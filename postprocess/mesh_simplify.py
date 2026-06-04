import open3d as o3d
import sys
def simplify_mesh(inpath,outpath,target=5000):
    mesh = o3d.io.read_triangle_mesh(inpath)
    mesh_s = mesh.simplify_quadric_decimation(target_number_of_triangles=target)
    o3d.io.write_triangle_mesh(outpath,mesh_s)
if __name__ == '__main__':
    simplify_mesh(sys.argv[1],sys.argv[2])
