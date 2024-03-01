import "../styles/ResourceDetails.css";
export default function ResourceDetails(props) {
  const { data } = props;

  if (!data) {
    // Handle the case when no category is selected
    return <div>Please select a category</div>;
  }

  return (
    <div>
      <div className="category">{data.title}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {data.items.map((section) => (
          <div className="section" key={section.section}>
            <div className="section-title">{section.sectionTitle}</div>
            <div>
              {section.services.map((service) => (
                <div className="item" key={service.title}>
                  <img
                    className="item-img"
                    src={service.image.svcImg}
                    alt={service.title}
                  />
                  <div className="item-info">
                    <div className="item-title">{service.title}</div>
                    <ul className="links-list">
                      {service.links.map((link) => (
                        <li key={link.linkTitle}>
                          <a href={link.link} target="_blank">
                            {link.linkTitle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
