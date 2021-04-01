module.exports=function SortMiddleware(req,res,next){
    res.locals._sort={
        enabledSort:false,
        type:'dafault'
    };
    if(req.query.hasOwnProperty('_sort')){
        // res.locals._sort.enabledSort=true;
        // res.locals._sort.type=req.query.type;
        // res.locals._sort.column=req.query.column;

        Object.assign(res.locals._sort,{
            enabledSort:true,
            type:req.query.type,
            column:req.query.column,
        });

    }

    next();

}