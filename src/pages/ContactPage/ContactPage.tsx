import React from "react";
import "./ContactPage.scss";
import ColumnLayout from "../../components/Layouts/ColumnLayout";
import Icon from "../../components/Icon/Icon";
import Headline from "../../components/Text/Headline";
import RowLayout from "../../components/Layouts/RowLayout";

const ContactPage = () => {
  const style = ({
    display: 'flex',
    alignItems: 'center',
    gap: 4
  });
  //* Experience */
  return (
    <div className="flexColumn centerContent" style={{ width: '100vw', height: '100vh', padding: 32 }}>
      <ColumnLayout gap={24} isCard>
        <Icon 
            icon={'Contact'} 
            className={'float-top-right resume-card-icon'}
        />
        <Headline size={3} secondary>Contact</Headline>
        <IconTextComponent
          text="JustinGistDesigner@gmail.com"
          iconString="Email"
          style={style}
        />
        <IconTextComponent
          text="LinkedIn Profile"
          iconString="Linkedin"
          style={style}
          link="https://www.linkedin.com/in/justin-gist-270862b2"
        />
        <IconTextComponent
          text="(407)-929-3184"
          iconString="Phone"
          style={style}
        />
      </ColumnLayout>
    </div>
  );
};
export default ContactPage;

const IconTextComponent = ({
  text,
  iconString,
  style,
  link
}: {
  text: string;
  iconString: string;
  style?: any;
  link?: string;
}) => (
  <RowLayout noWrapping gap={16}>
    <Icon className="text-headline" icon={iconString} />
    {!link && (
      <Headline truncate size={4} style={style}>
        {text}
      </Headline>
    )}
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer">
        <Headline truncate size={4} style={style}>
          {text}
        </Headline>
      </a>
    )}
  </RowLayout>
);