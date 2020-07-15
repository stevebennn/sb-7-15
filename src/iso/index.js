import React from "react";

const demos = {
  soundcloud:
    '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/379775672&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
  inception:
    '<iframe src="https://codesandbox.io/s/react-tailwind-gabe-fork-nvw22?fontsize=14&codemirror=1" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',
  plotly:
    '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
};

function Iframe({ route }) {
  const iframe = `<iframe src="https://codesandbox.io/embed/react-tailwind-gabe-fork-nvw22?fontsize=14&hidenavigation=1&initialpath=%2Fsections%2FCallToAction&module=%2Fsrc%2Fsections%2FCallToAction.js&hidedevtools=1&forcerefresh=0&hidenavigation=1&codemirror=1&theme=dark" title="Disjoint iframe" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`;

  return (
    <div>
      <p>yo</p>
      <div dangerouslySetInnerHTML={{ __html: iframe }} />
    </div>
  );
}

const Iso = ({ match }) => {
  const route = "CallToAction";

  return <Iframe route={route} />;
};

export default Iso;
