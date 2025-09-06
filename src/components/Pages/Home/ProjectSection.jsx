import Heading from "../../Heading/Heading";
import medicine from "../../../assets/img/slider-img/medicine.png";
import dope from "../../../assets/img/slider-img/dope.png";
import illusion from "../../../assets/img/slider-img/illusion.png";
import ProjectCard from "../../Cards/ProjectCard";

const projectList = [
  {
    id: 1,
    quote:
      "Since launching, we’ve been getting a ton of compliments on the site.",
    descreption:
      "It’s made a big difference in how we present ourselves. Big shoutout to the team at Graphfull, can’t recommend them enough.”",
    bgImg: medicine,
    redirectLink: "/",
    btnTxt: "SEE PROJECT",
    colorCode: "#108CFF",
  },
  {
    id: 2,
    quote:
      "Since launching, we’ve been getting a ton of compliments on the site.",
    descreption:
      "It’s made a big difference in how we present ourselves. Big shoutout to the team at Graphfull, can’t recommend them enough.”",
    bgImg: dope,
    redirectLink: "/",
    btnTxt: "SEE PROJECT",
    colorCode: "#FF61A6",
  },
  {
    id: 3,
    quote:
      "Since launching, we’ve been getting a ton of compliments on the site.",
    descreption:
      "It’s made a big difference in how we present ourselves. Big shoutout to the team at Graphfull, can’t recommend them enough.”",
    bgImg: illusion,
    redirectLink: "/",
    btnTxt: "SEE PROJECT",
    colorCode: "#108CFF",
  },
];

const ProjectSection = () => {
  return (
    <section className="h-auto w-full py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px] container flex flex-col gap-y-20 items-center  ">
      <div className="flex flex-col gap-y-4 items-center ">
        <Heading Variant={"h6"} Txt={"PROJECTS"} className={"small-heading "} />
        <Heading
          Variant={"h3"}
          Txt={"From “we need something” to “this is great”"}
          className={
            "md:text-[32px] text-[24px] lg:text-[28px] xl:text-[36px] 3xl:text-[40px] capitalize text-primary-white font-bold leading-[120%] tracking-[-0.4px] max-w-[560px] text-center "
          }
        />
      </div>
      <div className="flex flex-row flex-wrap 3xl:flex-nowrap items-center justify-center 3xl:justify-normal gap-6 3xl:gap-8 ">
        {projectList.map(item => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
