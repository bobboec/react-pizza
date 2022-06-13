import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza - block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#8d8b8b"
    {...props}>
    <circle cx="135" cy="136" r="125" />
    <rect x="0" y="285" rx="9" ry="9" width="280" height="27" />
    <rect x="0" y="332" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="445" rx="1" ry="1" width="82" height="35" />
    <rect x="122" y="440" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
