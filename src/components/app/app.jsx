import s from './app.module.css';
import ContactList from '../contactlist/contactlist.jsx';
import ContactForm from '../contactform/contactform.jsx';
import SearchBox from '../searchbox/searchbox.jsx';

export default function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <div className={s.main_grid}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
