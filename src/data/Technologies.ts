import Language from "../model/Language.ts";

const scalaKnown: Language = {
    name: "Scala",
    logo: "https://cdn.worldvectorlogo.com/logos/scala-4.svg",
    link: "https://www.scala-lang.org/",
    technologies: [
        {
            name: "Cats",
            link: "https://typelevel.org/cats/",
            logo: "https://typelevel.org/cats/img/cats-logo.png",
        },
        {
            name: "Cats-Effect",
            link: "https://typelevel.org/cats-effect/",
            logo: "https://typelevel.org/cats-effect/img/cats-effect-logo.svg",
        },
        {
            name: "Http4s",
            link: "https://http4s.org/",
            logo: "https://http4s.org/images/http4s-logo.svg"
        }, {
            name: "Doobie",
            link: "https://tpolecat.github.io/doobie/",
            logo: "https://cdn.rawgit.com/tpolecat/doobie/series/0.5.x/doobie_logo.svg",
        }, {
            name: "Circe",
            link: "https://circe.github.io/circe/",
            logo: "https://avatars.githubusercontent.com/u/23644473?v=4",
        }, {
            name: "Fs2",
            link: "https://fs2.io/",
            logo: "https://fs2.io/_media/logo.png",
        }
    ]
}

const typescriptKnown: Language = {
    name: "Typescript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    link: "https://www.typescriptlang.org/",
    technologies: [
        {
            name: "React",
            link: "https://react.dev",
            logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        }
    ]
}

const databaseKnown: Language = {
    name: "Databases",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
    link: "#",
    technologies: [
        {
            name: "PostgreSQL",
            link: "https://www.postgresql.org/",
            logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
        {
            name: "MySQL",
            link: "https://www.mysql.com/",
            logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
        }
    ]
}

export const knownTechnologies: Language[] = [scalaKnown, typescriptKnown, databaseKnown]

const scalaLearning: Language = {
    name: "Scala",
    logo: "https://cdn.worldvectorlogo.com/logos/scala-4.svg",
    link: "https://www.scala-lang.org/",
    technologies: [
        {
            name: "Spark",
            link: "https://spark.apache.org/",
            logo: "https://spark.apache.org/images/spark-logo-trademark.png",
        }
    ]

}

const typescriptLearning: Language = {
    name: "Typescript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    link: "https://www.typescriptlang.org/",
    technologies: [
        {
            name: "Next.js",
            link: "https://nextjs.org/",
            logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
        }
    ]
}

const databaseLearning: Language = {
    name: "Databases",
    logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
    link: "#",
    technologies: [
        {
            name: "MongoDB",
            link: "https://www.mongodb.com/",
            logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        }
    ]
}

export const learningTechnologies: Language[] = [scalaLearning, typescriptLearning, databaseLearning]

const scalaWantToLearn: Language = {
    name: "Scala",
    logo: "https://cdn.worldvectorlogo.com/logos/scala-4.svg",
    link: "https://www.scala-lang.org/",
    technologies: [
        {
            name: "ZIO",
            link: "https://zio.dev/",
            logo: "https://raw.githubusercontent.com/aparo/awesome-zio/master/awesome-zio.png",
        }
    ]
}

export const wantToLearnTechnologies: Language[] = [scalaWantToLearn]
