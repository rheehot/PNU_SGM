// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({ 
        win : 70,
        lose : 30
     })
  }
  