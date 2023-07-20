import { useState } from "react"
import { motion,AnimatePresence } from "framer-motion"
const FAQ = ({Ques,Ans,i}) => {

    const [drop,setDrop] = useState(null)
    const dropDown = (index) => {
        setDrop(index === drop ? null : index)
    }
    return(
            <div className="w-full">
                <div className="w-full py-2 border-b border-gray-400">
                    <h1 className="text-2xl font-ysa flex flex-row items-center justify-between w-full ">{Ques} 
                    <box-icon
                        name='chevron-down'
                        onClick={() => dropDown(i)}
                        rotate={i === drop ? '180' : ''}
                        transition={{duration:0.3}}
                    >

                    </box-icon>
                    </h1>
                </div>
                <AnimatePresence>
                    {i === drop && 
                    (<motion.div 
                        initial={{height:0}} 
                        animate={{height:"auto"}} 
                        exit={{height:0}}
                        transition={{duration:0.3}}
                        style={{overflow:"hidden"}}
                        className="pt-4"
                    > 
                    <h1 className="font-poppins">{Ans}</h1>
                    </motion.div>)}
                </AnimatePresence>
            </div>
    )
}

export default FAQ