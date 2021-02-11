import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontSize: theme.typography.pxToRem(8),
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({
  question1,
  question2,
  question3,
  question4,
  answer1,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>
            <p className='description__faq'> {question1}</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>{answer1}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading}>
            {' '}
            <p className='description__faq'> {question2}</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading}>
            {' '}
            <p className='description__faq'> {question3}</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading}>
            {' '}
            <p className='description__faq'> {question4}</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
