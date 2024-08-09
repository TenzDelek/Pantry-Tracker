import { additemdata } from '@/actions/actions';
import { useFormStatus } from 'react-dom';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const handleSubmit = async (formData: FormData) => {
    const result = await additemdata(formData);
    if (result.success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-[#0E0E0E] p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-sm font-bold mb-4">Add New Item</h2>
        <form action={handleSubmit}>
          <input
          autoFocus
            type="text"
            name='item'
            placeholder="Enter item"
            className="bg-[#1E1E1E] text-xs py-3 px-2 rounded-md outline-none w-full"
          />
          <div className="flex mt-3 text-xs justify-end">
            <SubmitButton />
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending} // disable when pending is true
      className={`bg-[#1e1e1e] text-white px-4 py-2 rounded hover:bg-gray-800 transition ${pending && "animate-pulse"}`}
    >
      {pending ? 'Adding...' : 'Done'}
    </button>
  );
}

export default Popup;