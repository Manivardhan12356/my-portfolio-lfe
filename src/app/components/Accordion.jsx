import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
   return (
      <div>
         <Accordion>
            <AccordionSummary
               expandIcon={<ArrowDropDownIcon />}
               aria-controls="panel2-content"
               id="panel2-header"
            >
               <Typography sx={{ fontWeight: "bold" }}>Software Engineer, IBM <p className='font-light'>Dec 2023 - Present</p></Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Spent 50% of my time developing user interfaces for the IBM Financial Transaction Manager (FTM) using
                  React.js, Remix.js, Carbon.js, Node.js, and SQL to deliver responsive and efficient financial transaction pages.
                  Collaborated 30% with the backend team to integrate APIs and services, ensuring smooth data flow and
                  functionality across the system.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary
               expandIcon={<ArrowDropDownIcon />}
               aria-controls="panel2-content"
               id="panel2-header"
            >
               <Typography sx={{ fontWeight: "bold" }}>Software Engineer, Cactus Communications <p className='font-light'>Aug 2023 - Jan 2024</p></Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Contributed 40% of my time to enhancing the user interface (UI) of the company’s Editage platform, a microfrontend project, by developing responsive features and improving usability across mobile and desktop platforms using React.js, Angular, Tailwind CSS, Strapi CMS, CSS, and Node.js.Dedicated 35% of my time to collaborating with client services, sales, and design teams, implementing new features, conducting code reviews, and participating in Agile development processes to meet deadlines and continuously improve the platform.Focused 25% on designing and updating layouts to optimize performance and ensure cross-browser compatibility, creating a seamless and consistent user experience.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}
