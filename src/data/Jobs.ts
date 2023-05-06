import Job from "../model/Job.ts";


export const jobs: Job[] = [
    {
        title: "Specialist Engineer",
        link: "https://www.globant.com/",
        company: "Globant",
        companyLogo: "https://scontent.fmvd4-1.fna.fbcdn.net/v/t39.30808-6/290947282_10158924207809010_6569349691020242163_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rliXz--m14UAX9KY9F5&_nc_ht=scontent.fmvd4-1.fna&oh=00_AfBJNMwEYjHC9moRKvbajVk5_k4LTy1L_lIvrQ2uthDMKQ&oe=6459430E",
        date: "Feb. 2023 - Present",
        activities: [
            "Develop and maintain high performance microservices utilizing the Typelevel stack",
            "Help coworkers advance their Scala knowledge and expertise via pairgramming, presentations and recommendation of training resources",
            "Participated in the design and development of CI/CD pipelines, leveraging Jenkins to enforce quality gates and automate the deployment of applications to AWS"
        ]
    },
    {
        title: "Software Developer",
        link: "https://www.bqn.com.uy/",
        company: "BQN",
        companyLogo: "https://www.uruguayxxi.gub.uy/uploads/servicio/resize_a786607df1ba22d0a763f823b171abc9b687dda7.png.png",
        date: "Aug. 2021 - Feb. 2023",
        activities: [
            "Improved query efficiency by leveraging recursive queries",
            "Trained new hires in Scala",
            "Introduced new design patterns into internal libraries, increasing developer experience and efficiency",
            "Developed and maintained web services utilising Scala Play",
            "Implemented digital signature functionality for a web application using Scala and Java Cryptography",
        ]
    }
]
