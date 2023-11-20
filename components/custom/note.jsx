const Note = ({ note, children }) => {
  return (
    <div className='lg:px-40 px-20 py-6 bg-[#F2F2F2]'>
      { note && <p>{ note }</p> }
      { children }
    </div>
  );
}

export default Note;