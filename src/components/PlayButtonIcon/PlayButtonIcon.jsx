export const PlayButtonIcon = ({ color, play, className = '' }) => (
    play ?
        <svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.70387 14.8552C8.03814 15.2788 7.16699 14.8006 7.16699 14.0115V5.98818C7.16699 5.19909 8.03814 4.72087 8.70387 5.14452L15.0079 9.15618C15.6254 9.54913 15.6254 10.4505 15.0079 10.8435L8.70387 14.8552Z"
                fill={color || 'white'}/>
        </svg>
        :
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="7" width="2.57143" height="9.08108" rx="1.28571" fill={color || 'white'}/>
            <rect x="13.2861" y="7" width="2.57143" height="9.08108" rx="1.28571" fill={color || 'white'}/>
        </svg>
);
