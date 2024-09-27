import fs from 'fs'

export async function POST(req: Request) {
  try {
    let d = await req.formData();
    console.log(d);
    // await fs.writeFile('/public',d,()=>{
    //     console.log('image written')
    // })

   

    return Response.json({ message: "success" });
  } catch (e) {
    return Response.json({ error: "Internal Server Error" });
  }
}
