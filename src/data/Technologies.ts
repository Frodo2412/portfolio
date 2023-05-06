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
            logo: "https://http4s.org/img/http4s-logo.svg",
        }, {
            name: "Doobie",
            link: "https://tpolecat.github.io/doobie/",
            logo: "https://tpolecat.github.io/doobie-0.13.4/assets/img/doobie-logo.svg",
        }, {
            name: "Circe",
            link: "https://circe.github.io/circe/",
            logo: "https://circe.github.io/circe/img/circe-logo.svg",
        }, {
            name: "Fs2",
            link: "https://fs2.io/",
            logo: "https://fs2.io/img/fs2-logo.svg",
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

export const knownTechnologies: Language[] = [scalaKnown, typescriptKnown]

const typescriptLearning: Language = {
    name: "Typescript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    link: "https://www.typescriptlang.org/",
    technologies: [
        {
            name: "Next.js",
            link: "https://nextjs.org/",
            logo: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
        }
    ]
}

export const learningTechnologies: Language[] = [typescriptLearning]

const scalaWantToLearn: Language = {
    name: "Scala",
    logo: "https://cdn.worldvectorlogo.com/logos/scala-4.svg",
    link: "https://www.scala-lang.org/",
    technologies: [
        {
            name: "ZIO",
            link: "https://zio.dev/",
            logo: "https://zio.dev/img/zio-logo.svg",
        }
    ]
}

export const wantToLearnTechnologies: Language[] = [scalaWantToLearn]
