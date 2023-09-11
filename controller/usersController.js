
const User = require('../models/userModels');

exports.index =  async(req, res, next) => {

    const user = await User.find().sort({_id:-1});
    res.status(200).json({
      data:user
    })
  };
exports.hh =  (req, res, next) => {
    res.send('hello HH');
  };

  exports.insert = async (req,res,next) => {

    const{email,username,password} = req.body

    let user = new User({
      email:email,
      username:username,
      password:password,
    });

    user.save();

    res.status(200).json({
      data:'เพิ่มข้อมูลเรียบร้อย'
    })
  };

  exports.finduserByid = async (req,res,next) => {
    try{
       const{id} = req.params;
       const user = await User.findById(id);
       if(!user){
        throw new Error('ไม่พบผู้ใช้งาน');
       }

       res.status(200).json({
        data: user,
       })
      
    } catch(error){
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })

    }
  }

  exports.updateUser = async(req,res,next) => {
    try {
      const{id}= req.params;
      const{email,username,password} = req.body;

    //  console.log(email);
    //  console.log(username);
     console.log(req.body);

      const user = await User.findByIdAndUpdate(id,{
        email:email,
        username:username,
        password:password,
      });

      console.log(user)

      res.status(200).json({
        data:{
          message: `แก้ไขข้อมูลผู้ใช้ ${id} สำเร็จ`
        }
      })
    } catch (error) {

      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด'+ error.message
        }
      })
      
    }
  }

  exports.updateUser = async (req,res,next) => {
    try {
      const {id} = req.params;
      const user = User.deleteOne({_id:id})
      
      if( user.deletedCount === 0){
        throw new Error('ไม่สามารถลบข้อมูล');
      } else{
        res.status(200).json({
          data:{
            message : `ลบข้อมูลผู้ใช้ ${id} สำเร็จ`,
          }
        })
      }
    } catch(error){
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })
    }
    }