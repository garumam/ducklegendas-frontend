export function searchTimeout (onSearch, typingTimer, doneTypingInterval){
    clearTimeout(typingTimer);
    typingTimer = setTimeout(onSearch, doneTypingInterval);
}