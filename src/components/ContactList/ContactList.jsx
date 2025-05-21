import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  const handleChangeQuery = (query) => {
    dispatch(changeFilter(query));
  };

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={s.wrapper}>
        {filteredData.map((contact) => (
          <li className={s.listItem} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
