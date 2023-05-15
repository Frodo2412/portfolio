export default function Hero() {

    return (
        <div className={"w-full min-h-10 flex items-center justify-center p-20"}>
            <div className={"flex bg-slate-900/50 p-10 max-w-6xl md:flex-row flex-col"}>
                <p className={"hidden md:block text-6xl text-right max-w-5xl border-gray-300 border-r-2 pr-5"}>
                    Do you want to build <strong>efficient</strong> software that <strong>scales</strong>?
                </p>
                <div className={"flex flex-col content-center justify-center ml-5"}>
                    <h1 className={"text-6xl"}>Hello there, I'm Bruno.</h1>
                    <p className={"text-lg"}>
                        I'm a software engineer with a passion for big scale, highly concurrent distributed systems.
                        I strongly believe the best way to build them is by leveraging the power of functional programming.
                    </p>
                </div>
            </div>
        </div>
    )

}