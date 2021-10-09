
exports.mainPage = (req, res)=>{
     
    res.json({
        message: `This is my home page.`,
    })
   
};

exports.errorPage = (req, res)=>{
     
    res.json({
        message: "Error 404(Page not found)",
    })
   
};