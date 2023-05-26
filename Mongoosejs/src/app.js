const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/seconddb")
.then(()=>{console.log("connection successful....")})
.catch((err)=>console.log(err));

const playlistSchema=new mongoose.Schema({
    name:
    {   type: String,
        required:true
    },
    ctype:String,
    video:{
        type:Number,
        validate(value){
            if(value<0)throw new Error("Videos count should not be negative");

    }},
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
const Playlist=new mongoose.model('Playlist',playlistSchema);
const createDocument=async()=>{
    try{
    const blockchainPlaylist=new Playlist({
    name:"blockchain", 
    ctype:"andsdc",
    video:-5,
    active:true,
})
 const result= await blockchainPlaylist.save([blockchainPlaylist]);
console.log(result);
    }
    catch(err){console.log(err)};
}

 const getDocument=async ()=>{
    try{
    const result=await Playlist
    .find({$and : [{name :'react'} , {video: {$gt:15}}]}).countDocuments();
    console.log(result);
    }
    catch(err){console.log(err);}
 }

const updateDocuments= async(_id)=>{ 
    try{
    const result=await Playlist.findByIdAndUpdate({_id},{$set:{name:"Node"}});
    console.log(result);
    }
    catch(err){console.log(err);}
}
//  getDocument();
const deleteDocuments=async(_id)=>{
    const result=await Playlist.deleteOne({_id});
    console.log(result);
}
// updateDocuments("646d9e7ff9ad5c9cf0c79250");
//  deleteDocuments("646d9e7ff9ad5c9cf0c79250")
// createDocument();
