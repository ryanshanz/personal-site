import Work from '../work_experience'; 
import Card from '../../components/Card';

export default function Experience() {

    const experiences: Work[] = [
        {
            title: 'Ctrl+Privacy Website',
            date: 'June 2025 to Present',
            bullets: [
                'Develop site for a research project focused on privacy education',
                'Tech stack consists of React, Next.js, and Tailwind CSS',
                'Develop privacy games and scenarios such as a phishing quiz'
            ],
            link:'https://github.com/CtrlPrivacy/Ctrl-Privacy',
            linkText: 'Github Repository'
            
        },
        {
            title: 'Capstone Project',
            date: 'September 2024 to April 2025',
            bullets: [
            'Work with University of Maine employees to develop a software solution for the annual Student Symposium',
            'Use Javascript to automate tasks such as parsing Google Form data, creating PDFs, assigning judges to student projects, and emailing participants ',
            'Build React-based site to display Student Symposium data'
            ],
            link:'https://github.com/StudentSymposiumSoftware/StudentSymposiumSoftware',
            linkText: 'Repository on Github'
        },
        {
            title: 'Interactive Movie Theater Site',
            date: 'April 2025',
            bullets: [
                'Develop a site for online games related to a local movie theater during a Web Development class at the University of Maine',
                'Uses TypeScript, HTML and CSS'
            ],
            link:'https://github.com/ryanshanz/project-cos320',
            linkText: 'Github Repository'
        }
];

return (
    <div>
        <h1 className="text-2xl font-semibold mb-4 text-center">Projects</h1>
        <Card experiences={experiences} />
    </div>
);

}