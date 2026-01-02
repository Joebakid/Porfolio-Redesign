import profileImg from './img/img.jpeg'

export default function Intro() {
  return (
    <section className="container-main flex items-center justify-center flex-col mt-10 ">
        <div className="flex gap-1.5">
            <div className='  flex-1 items-center justify-center'>
            <h1 className="text-2xl font-extrabold md:text-3xl ">Hi, I’m Joseph Bawo</h1>
             <p className='  text-[15px] md:text-[18px]'>
                Building modern web applications, tools, and digital products that scale.
                </p>

             
              
                    </div>

                    <div>

                    </div>
                    <img
                        src={profileImg}
                        alt="Joseph Bawo"
                        className="w-[100px] h-[100px]  flex-shrink-0 sm:flex-1 rounded-full object-cover"
                    />
                    </div>

                    <div className='py-2'>
                        
                    </div>
       
     
    </section>
  );
}
