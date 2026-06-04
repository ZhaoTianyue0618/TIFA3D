import sys
from triposr import TripoSR
import os
img_path = sys.argv[1]
model = TripoSR()
out_glb = "./static/"+str(os.urandom(4).hex())+".glb"
mesh = model(img_path)
mesh.export(out_glb)
print(out_glb)
