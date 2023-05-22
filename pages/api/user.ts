export default function handler(req, res){
    res.status(200).json({name: 'John Doe'});
    console.log(process.env.STRIPE_API_KEY)
}