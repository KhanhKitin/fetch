module.exports = async () => {
    const User = require('./models/Users');
    
    const errHandler = err => {
        console.log(err);
    }

    const user = await User.create({
        username: 'hoang khanh',
        password: '123456789',
        email: 'hoangkhanh@gmail.com'
    }).catch(errHandler);

}