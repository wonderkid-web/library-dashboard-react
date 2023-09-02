import { useQuery } from "@tanstack/react-query"
import Chart from "./Chart"
import moment from "moment"

const Dashboard = () => {

    const { data, isSuccess } = useQuery({
        queryFn: async () => {
            const data = await fetch('http://localhost:3006/getAttributeData')
            const raw = await data.json()
            return raw
        },
        queryKey: ['attribute']
    })

    if (isSuccess) {
        return (
            <>
                {/* DAILY DATA */}

                {/* PROFILE DATA */}
                <div className="p-4 rounded-lg row-span-2 bg-[#ddd] grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="col-span-full rounded-md bg-white flex">
                        <div className="flex justify-around w-full">
                            <div className="profile-image self-center">
                                <img className="rounded-full border-double border-4 border-slate-500 w-[150px]" src="https://th.bing.com/th/id/R.3d3291f99fb37665400552a4d2cb846e?rik=frIXYv71zsELXQ&riu=http%3a%2f%2fwww.frankfarms.com%2fassets%2fimages%2fRed_Apple.png&ehk=%2fGYtVMpZiPkGBog0ejEd7bDW6ofFCNCQsRpBUPAnc1o%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            </div>
                            <div className="profile-bio relative flex flex-col h-full justify-evenly">
                                <div className="top">
                                    <p className="text-xl">Hallo Wonderkid..</p>
                                    <p className="font-bold absolute top-2 right-[-15px]">Admin</p>
                                    <p className="text-secondary mt-2 underline underline-offset-2">Senin, 18 August 2023</p>
                                </div>
                                <button className="btn btn-accent hover:btn-accent-focus text-white hover:scale-105"
                                >View Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-md bg-white flex flex-col justify-evenly">
                        <div className="rounded-full mx-auto w-1/3">
                            <img src="/library.png" alt="" />
                        </div>
                        <h1 className="text-xl font-bold text-center underline underline-offset-2">Last Loaning</h1>
                        <div className="flex flex-col place-items-center justify-end w-full h-1/4 ">
                            <h1 className="font-bold">{data.last_loaning.name}</h1>
                            <p className="text-sm">Web Developer</p>
                            <p className="text-[#999] text-sm">{moment(data.last_loaning.borrow_at).format('LLL')} </p>
                        </div>
                    </div>
                    <div className="rounded-md bg-white flex flex-col justify-evenly">
                        <div className="rounded-full mx-auto w-1/3">
                            <img src="/return.png" alt="" />
                        </div>
                        <h1 className="text-xl font-bold text-center underline underline-offset-2">Last Returning</h1>
                        <div className="flex flex-col place-items-center justify-end w-full h-1/4 ">
                            <h1 className="font-bold">{data.last_returning.loan[0].name}</h1>
                            <p className="text-sm">Python master 3 Days</p>
                            <p className="text-[#999] text-sm">{moment(data.last_returning.return_at).format('LLL')}</p>
                        </div>
                    </div>
                </div>


                {/* UPDATE DATA */}
                <div className="rounded-lg bg-[#ddd] stats grid grid-rows-2 gap-2 p-2 ">
                    <div className="stat bg-white rounded-md">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{data?.user}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat bg-white rounded-md">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Books</div>
                        <div className="stat-value">{data.book}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat bg-white rounded-md">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Loan</div>
                        <div className="stat-value">{data.loan}</div>
                        <div className="stat-desc">Jan 1st - {moment(data.last_loaning.borrow_at).format('Do MMM')}</div>
                    </div>
                    <div className="stat bg-white rounded-md">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Return</div>
                        <div className="stat-value">{data.return}</div>
                        <div className="stat-desc">Jan 1st - {moment(data.last_returning.return_at).format('Do MMM')}</div>
                    </div>
                </div>

                {/* CHART DATA */}
                <div className="rounded-lg bg-white p-2 box-border">
                    <Chart />
                </div>
            </>
        )
    }
}

export default Dashboard