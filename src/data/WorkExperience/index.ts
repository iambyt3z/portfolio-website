interface WorkExperienceItem {
    company: string;
    companyUrl: string;
    role: string;
    time: string;
}

const WORK_EXPERIENCE: WorkExperienceItem[] = [
    {
        "company": "Kfintech",
        "companyUrl": "https://www.kfintech.com/",
        "role": "Full-Stack Developer",
        "time": "Jul 2022 - Aug 2023"
    },
    {
        "company": "Amazon",
        "companyUrl": "https://www.aboutamazon.com/about-us",
        "role": "SWE Intern",
        "time": "Feb 2022 - Jun 2022"
    },
    {
        "company": "Tech Mahindra",
        "companyUrl": "https://www.techmahindra.com/en-in/?f=2661957399",
        "role": "Summer Intern",
        "time": "May 2020 - Jun 2020"
    }
];

export default WORK_EXPERIENCE;
