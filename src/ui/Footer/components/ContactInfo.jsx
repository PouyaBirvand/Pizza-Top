function ContactInfo() {
    const contactItems = [
      {
        icon: "https://cdn.lordicon.com/surcxhka.json",
        text: "+1 (555) 123-4567"
      },
      {
        icon: "https://cdn.lordicon.com/rhvddzym.json",
        text: "hello@emeraldslice.com"
      },
      {
        icon: "https://cdn.lordicon.com/surcxhka.json",
        text: "123 Pizza Street\nFood City, FC 12345",
        isAddress: true
      }
    ];
  
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <lord-icon
            src="https://cdn.lordicon.com/srsgifqc.json"
            trigger="hover"
            colors="primary:#10b981,secondary:#065f46"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          Contact Info
        </h3>
        <ul className="space-y-3">
          {contactItems.map((item, index) => (
            <li key={index} className={`flex items-${item.isAddress ? 'start' : 'center'} space-x-3`}>
              <lord-icon
                src={item.icon}
                trigger="hover"
                colors="primary:#10b981,secondary:#065f46"
                style={{ 
                  width: '16px', 
                  height: '16px',
                  ...(item.isAddress && { marginTop: '2px' })
                }}
              />
              <span className="text-slate-400">
                {item.isAddress ? (
                  <>
                    123 Pizza Street<br />
                    Food City, FC 12345
                  </>
                ) : (
                  item.text
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ContactInfo;
  