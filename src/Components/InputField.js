import useInput from "../Hooks/useInput";
import './InputField.css';
import {ImSearch} from 'react-icons/im';
import {ImLocation} from 'react-icons/im';

const InputField = ({setLocation , setSearchTerm}) => {
    const address = useInput("");
  
    const handleClick = (suggestion) => {
        setLocation({latitude : suggestion.center[1] , longitude : suggestion.center[0]});
        setSearchTerm(suggestion.place_name);
    }

    return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <div className="field-Wrapper">
        <button className="icon-btn" type="submit"><ImSearch/></button>  
        <input className="Input"
            type="search"
          placeholder="Address"
          {...address}
          isTyping={address.value !== ""}
        />
        {address.suggestions?.length > 0 && (
          <div className="SuggestionWrapper">
            {address.suggestions.map((suggestion, index) => {
                return (
                  <div className="d-flex"><div className="icon"><ImLocation/></div>
                <div className="Suggestion"
                  key={index}
                  onClick={() => {
                    address.setValue(suggestion.place_name);
                    address.setSuggestions([]);
                    handleClick(suggestion);
                  }}
                >
                  {suggestion.place_name}
                </div></div>
              );
            })}
          </div>
        )}
      </div>
      </form>
    );
};

export default InputField;