import {Job, jobs} from "../../data/Jobs.ts";

const JobCard = ({title, link, company, companyLogo, date, activities}: Job) => {

    return (
        <div className={"flex flex-row max-w-5xl p-5 w-auto"}>
            <div className={"w-1/4 border-r-2 "}>
                <h1 className={"text-xl font-medium m-2 w-fit"}>
                    {date}</h1>
            </div>
            <div className={"flex flex-col content-center justify-center pl-2 w-3/4"}>
                <div className={"flex flex-col"}>
                    <a href={link}>
                        <div className={"flex flex-row justify-start items-center gap-5"}>
                            <img className={"rounded-full h-20"} src={companyLogo} alt={company}/>
                            <div className={"text-7xl font-bold"}>{company}</div>
                        </div>
                        <div className={"mt-5"}>
                            <h1 className={"text-3xl font-medium"}>{title}</h1>
                            <ul className={"list-disc list-inside"}>
                                {activities.map((activity) => <li>{activity}</li>)}
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default function Experience() {
    return (
        <div className={"flex flex-col justify-around content-around text-lg w-full"}>
            <h1 className="text-6xl font-bold text-white text-center bg-transparent m-10">Where I've worked</h1>
            <div className={"flex flex-row justify-center content-center text-black bg-white p-10"}>
                <div className={"flex flex-col h-auto items-center"}>
                    {/* This is an arrow pointing up */}
                    <i className={"w-4 h-4 border-black border-t-4 border-l-4 rotate-45"}></i>
                    <i className={"w-0 flex-1 border-black border-l-4"}></i>
                </div>
                <div className={"flex flex-col"}>
                    {jobs.map((job) => <JobCard {...job}/>)}
                </div>
            </div>
        </div>
    )
}
