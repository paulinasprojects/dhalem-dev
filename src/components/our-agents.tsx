import { ourAgentsList } from "@/lib/data";
import "@/styles/our-agents.scss";

const OurAgents = () => {
  return (
    <div className="our-agents-main-container">
      <div className="our-agents-title-container">
        <span className="our-agents-title">Our Agents</span>
        <span className="our-agents-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <div className="agents-list-container">
        {ourAgentsList.map((agent) => (
          <div key={agent.id} className="agent-list-content-container">
            <img src={agent.image} alt=""  className="agent-image" />
            <span className="agent-name">{agent.name}</span>
            <span className="agent-work-position">{agent.workPosition}</span>
          </div>
        ))}
      </div>
      <div className="see-more-container">
        <p className="see-more-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="see-more-button">See More</button>
      </div>
    </div>
  )
}

export default OurAgents