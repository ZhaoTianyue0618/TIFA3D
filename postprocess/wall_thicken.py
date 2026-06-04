import trimesh
import sys
def thick_wall(file_in,file_out,min_wall=1.2):
    mesh = trimesh.load(file_in)
    mesh = mesh.convex_hull
    mesh.export(file_out)
if __name__ == '__main__':
    thick_wall(sys.argv[1],sys.argv[2])
