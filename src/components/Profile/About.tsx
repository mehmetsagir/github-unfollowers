import React from 'react';
import styled from 'styled-components';

import CompanyIcon from 'svg/company.svg';
import LocationIcon from 'svg/location.svg';
import MailIcon from 'svg/mail.svg';
import WebsiteIcon from 'svg/website.svg';
import TwitterIcon from 'svg/twitter.svg';

type Props = {
  company?: string;
  location?: string;
  blog?: string;
  email?: string;
  twitter?: string;
};

const About: React.FC<Props> = ({
  company,
  location,
  blog,
  email,
  twitter,
}) => (
  <Container>
    {company && (
      <li>
        <CompanyIcon />
        {company}
      </li>
    )}
    {location && (
      <li>
        <LocationIcon />
        {location}
      </li>
    )}
    {email && (
      <li>
        <MailIcon />
        <a href={`mailto:${email}`}>{email}</a>
      </li>
    )}
    {blog && (
      <li>
        <WebsiteIcon />
        <a
          href={blog.slice(0, 4) === 'http' ? blog : `http://${blog}`}
          target="_blank"
          rel="noreferrer"
        >
          {blog}
        </a>
      </li>
    )}
    {twitter && (
      <li>
        <TwitterIcon />
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          {twitter}
        </a>
      </li>
    )}
  </Container>
);

const Container = styled.ul`
  @media (max-width: 1050px) {
    display: none;
  }
  li {
    display: flex;
    align-items: center;
    gap: 5px;
    &:not(:last-child) {
      margin-bottom: 6px;
    }
    svg {
      width: 16px;
      height: 16px;
      &,
      > path {
        fill: #8b949e;
      }
    }
    a {
      &:hover {
        color: #58a6ff;
      }
    }
  }
`;

export default About;
