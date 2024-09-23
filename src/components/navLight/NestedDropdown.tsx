import { Dropdown } from "flowbite-react";

const NestedDropdown = () => {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>
        <details className="dropdown">
          <summary className="btn m-1"><i className="las la-globe text-xl"></i></summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-44 p-2">
            <li>
              <a>English</a>
            </li>
            <li>
              <a>
                فارسی
              </a>
            </li>
          </ul>
        </details>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default NestedDropdown;
