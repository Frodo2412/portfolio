import {Job, jobs} from "../../data/Jobs.ts";

const JobCard = ({title, link, company, companyLogo, date, activities}: Job) => {

    return (
        <>
            <div
                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div className={"flex flex-row"}>
                <div className={"w-1/4"}>
                    <time
                        className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                </div>
                <div className={"flex flex-col content-center justify-center pl-2 w-3/4 pr-10"}>
                    <div className={"flex flex-col"}>
                        <a href={link} className={"w-fit"}>
                            <div className={"flex flex-row justify-start items-center gap-5"}>
                                <img className={"rounded-full h-12"} src={companyLogo} alt={company}/>
                                <div className={"text-xl font-semibold text-gray-900 dark:text-white"}>{company}</div>
                            </div>
                        </a>
                        <div className={"mt-5 text-gray-500 dark:text-gray-400"}>
                            <h1 className={"text-lg font-medium"}>{title}</h1>
                            <ul className={"list-disc list-outside text-base"}>
                                {activities.map((activity) => <li>{activity}</li>)}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default function Experience() {
    return (
        <div className={"flex flex-col justify-around content-around text-lg w-full"}>
            <h1 className="text-6xl font-bold text-white text-center bg-transparent m-10">Where I've worked</h1>
            <div className={"flex flex-row justify-center content-center text-black bg-white dark:bg-gray-900 p-10"}>
                <ol className={"relative border-l border-gray-200 dark:border-gray-700 max-w-5xl"}>
                    {jobs.map((job) =>
                        <li className={"mb-10 ml-4"}>
                            <JobCard {...job}/>
                        </li>)}
                </ol>
            </div>
        </div>
    )
}
