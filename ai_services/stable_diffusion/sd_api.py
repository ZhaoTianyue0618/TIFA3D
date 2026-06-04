import sys
from diffusers import StableDiffusionPipeline
import torch
import os
pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5",torch_dtype=torch.float16).to("cuda")
pos = sys.argv[1]
neg = sys.argv[2]
img = pipe(prompt=pos,negative_prompt=neg).images[0]
save_path = "./static/"+str(os.urandom(4).hex())+".png"
img.save(save_path)
print(save_path)
