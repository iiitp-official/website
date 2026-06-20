import { useState } from "react";
import { organizationData } from '../suo_motu_data/organisationData';
import { budgetData } from '../suo_motu_data/budgetData';
import { publicityData } from '../suo_motu_data/publicityData';
import { egovData } from '../suo_motu_data/egovData';
import { prescribedData } from '../suo_motu_data/prescribedData';
import { initiativeData } from '../suo_motu_data/initiativeData';
import "../styles/suoMotu.css";

const tabs = [
  { id: "organization", label: "Organisation & Functions" },
  { id: "budget", label: "Budget & Programmes" },
  { id: "publicity", label: "Publicity & Public Interface" },
  { id: "egov", label: "E-Governance" },
  { id: "prescribed", label: "Information as may be Prescribed" },
  { id: "initiative", label: "Information Disclosed on Own Initiative" },
];

export default function SuoMotuDisclosure() {
  const [activeTab, setActiveTab] = useState("organization");

  const getData = () => {
    switch (activeTab) {
      case "organization":
        return organizationData;
      case "budget":
        return budgetData;
      case "publicity":
        return publicityData;
      case "egov":
        return egovData;
      case "prescribed":
        return prescribedData;
      case "initiative":
        return initiativeData;
      default:
        return [];
    }
  };

  const data = getData();

  return (
    <div className="suo-motu-page">
      <div className="container">
        <div className="sidebar">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? "active" : ""}
            >
              {tab.label}
            </a>
          ))}
        </div>

        <div className="main-content">
          <h2>Suo Motu Disclosure</h2>

          <table>
            <thead>
              <tr>
                <th className="col-sno">S.No.</th>
                <th className="col-item">Item</th>
                <th className="col-details">Disclosure Details</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  style={row.isHeading ? { backgroundColor: '#f2f2f2', fontWeight: 'bold' } : {}}
                >
                  <td className="col-sno">{row.sno}</td>

                  {row.isHeading ? (
                    <td colSpan="2" className="col-details">
                      {row.item}
                    </td>
                  ) : (
                    <>
                      <td className="col-item">{row.item}</td>

                      <td className="col-details">
                        {Array.isArray(row.details) ? (
                          row.details.map((item, i) => (
                            <div key={i}>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                              >
                                {item.text}
                              </a>
                            </div>
                          ))
                        ) : row.link ? (
                          <a
                            href={row.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                          >
                            {row.details}
                          </a>
                        ) : (
                          row.details
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
