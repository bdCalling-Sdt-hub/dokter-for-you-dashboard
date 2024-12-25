import { GrMoney } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";


     const data = [
         {
             name: 'Workload',
             date: '13 NOV, 2024',
             load: '1000',
             resolve: '2500',
             icon: <MdOutlineWorkOutline size={24} />,
             bgColor: 'bg-[#F0F4FF]',
             iconColor: 'text-[#0A2369]',
         },
         {
             name: 'Total Earning',
             total: '$558k',
             daily: '$525k',
             icon: <GrMoney size={24} />,
             bgColor: 'bg-[#F0F4FF]',
             iconColor: 'text-[#0A2369]',
         },
     ]; 

const Summary = () => {
    return (
         <div className="grid grid-cols-2 gap-6">
            {data.map((item, index) => (
                <div key={index} className="bg-white  p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor}`}>
                            <div className={item.iconColor}>{item.icon}</div>
                        </div>
                        <h3 className="text-gray-700 font-medium text-lg">{item.name}</h3>
                    </div>

                    {item.date ? (
                        <div className="">
                            <p className="text-[12px] py-1 text-gray-500">{item.date}</p>
                            <div className="flex gap-2  justify-between">
                                {item.load && (
                                    <div>
                                        <span className="text-gray-500">load: </span>
                                        <span className="text-red-500 font-semibold">{item.load}</span>
                                    </div>
                                )}
                                {item.resolve && (
                                    <div>
                                        <span className="text-gray-500">resolve: </span>
                                        <span className="text-green-500 font-semibold">{item.resolve}</span>
                                    </div>
                                )}
                               
                            </div>
                        </div>
                    ) : (
                        <div className=""> 
                         <p className="text-[12px] py-3 text-gray-500"></p>
                            <div className="flex justify-between  gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">Total: </span>
                                    <span className="text-gray-900 font-semibold">{item.total}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500">Daily: </span>
                                    <span
                                        className={`font-semibold ${
                                            item.name === 'Total Earning' ? 'text-primary' : 'text-gray-900'
                                        }`}
                                    >
                                        {item.daily}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Summary;