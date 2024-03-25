const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact us Page</h1>
            <form>
                 <input type="text" className="border border-black p-2" placeholder="name"/><br/><br/>
                 <input type="text" className="border border-black p-2" placeholder="message"/><br/>
                 <button className="border border-orange-400 m-4 bg-black text-white rounded-lg ">Submit</button>
            </form>
            
        </div>
        )
}
export default Contact;