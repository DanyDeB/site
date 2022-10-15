
function NetworkIcon({name}) {
    const iconArray = {
        'Instagram': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>,
        'Facebook': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>,
        'UberEat': <svg fill="#7950F2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="1000px" height="1000px"><path d="M 14 4 C 8.486 4 4 8.486 4 14 L 4 36 C 4 41.514 8.486 46 14 46 L 36 46 C 41.514 46 46 41.514 46 36 L 46 14 C 46 8.486 41.514 4 36 4 L 14 4 z M 11.667969 15 L 13.023438 15 L 13.023438 20.464844 C 13.023438 21.896844 13.944125 22.832031 15.203125 22.832031 C 16.443125 22.832031 17.40625 21.880078 17.40625 20.455078 L 17.40625 15 L 18.736328 15 L 18.736328 23.888672 L 17.421875 23.888672 L 17.421875 23.041016 C 16.800875 23.683016 15.942781 24.042109 15.050781 24.037109 C 13.138781 24.037109 11.667969 22.643297 11.667969 20.529297 L 11.667969 15 z M 19.933594 15 L 21.216797 15 L 21.216797 18.189453 C 21.826797 17.572453 22.656437 17.227562 23.523438 17.226562 L 23.527344 17.226562 C 23.575344 17.225562 23.624875 17.225562 23.671875 17.226562 C 25.553875 17.266562 27.047813 18.823078 27.007812 20.705078 C 26.968813 22.587078 25.409344 24.081016 23.527344 24.041016 C 22.653344 24.035016 21.816172 23.682547 21.201172 23.060547 L 21.201172 23.888672 L 19.933594 23.888672 L 19.933594 15 z M 30.929688 17.226562 C 32.802688 17.226562 34.1875 18.681953 34.1875 20.626953 L 34.189453 21.046875 L 28.896484 21.046875 C 29.054484 22.115875 29.968828 22.908062 31.048828 22.914062 C 31.794828 22.925062 32.497641 22.570844 32.931641 21.964844 L 33.863281 22.648438 C 33.207281 23.542437 32.158781 24.062016 31.050781 24.041016 C 29.093781 24.041016 27.59375 22.570953 27.59375 20.626953 L 27.59375 20.607422 C 27.58175 18.753422 29.074687 17.238563 30.929688 17.226562 z M 37.871094 17.316406 L 38.332031 17.316406 L 38.332031 18.511719 L 37.796875 18.513672 C 36.955875 18.513672 36.357422 19.171641 36.357422 20.181641 L 36.357422 23.888672 L 35.074219 23.888672 L 35.074219 17.363281 L 36.34375 17.363281 L 36.34375 18.160156 C 36.66275 17.622156 37.246094 17.299406 37.871094 17.316406 z M 30.912109 18.359375 C 29.948109 18.359375 29.152828 19.031344 28.923828 20.027344 L 32.886719 20.027344 C 32.671719 19.031344 31.877109 18.359375 30.912109 18.359375 z M 23.410156 18.373047 C 22.162156 18.379047 21.157109 19.396531 21.162109 20.644531 C 21.168109 21.892531 22.183641 22.897578 23.431641 22.892578 L 23.431641 22.886719 L 23.441406 22.886719 C 24.680406 22.885719 25.683641 21.879625 25.681641 20.640625 L 25.681641 20.621094 C 25.676641 19.375094 24.658156 18.368047 23.410156 18.373047 z M 11.806641 26.111328 L 18.037109 26.111328 L 18.037109 27.636719 L 13.490234 27.636719 L 13.490234 29.802734 L 17.910156 29.802734 L 17.910156 31.275391 L 13.490234 31.275391 L 13.490234 33.476562 L 18.037109 33.476562 L 18.037109 35 L 11.806641 35 L 11.806641 26.111328 z M 27.890625 26.572266 L 29.548828 26.572266 L 29.548828 28.433594 L 31.40625 28.433594 L 31.40625 29.916016 L 29.548828 29.916016 L 29.548828 33.003906 C 29.548828 33.352906 29.788969 33.519531 30.167969 33.519531 L 31.40625 33.519531 L 31.408203 35.003906 L 29.623047 35.003906 C 28.504047 35.003906 27.884766 34.307688 27.884766 33.429688 L 27.884766 29.917969 L 26.630859 29.917969 L 26.630859 28.433594 L 27.890625 28.433594 L 27.890625 26.572266 z M 34.949219 28.261719 C 36.943219 28.261719 37.927578 29.165203 38.017578 30.533203 L 36.369141 30.533203 C 36.217141 29.806203 35.635609 29.595703 34.849609 29.595703 C 34.123609 29.595703 33.730469 29.836469 33.730469 30.230469 C 33.730469 30.533469 33.986734 30.687844 34.802734 30.839844 L 36.210938 31.126953 C 37.540937 31.415953 38.175781 32.081609 38.175781 32.974609 C 38.173781 34.226609 37.101266 35.138672 35.197266 35.138672 C 33.140266 35.138672 32.127719 34.231234 31.886719 32.865234 L 33.542969 32.865234 C 33.753969 33.592234 34.299 33.802734 35.25 33.802734 C 36.008 33.802734 36.476562 33.545719 36.476562 33.136719 C 36.476562 32.879719 36.309453 32.713797 35.689453 32.591797 L 34.117188 32.228516 C 32.680188 31.926516 32.015625 31.305562 32.015625 30.351562 C 32.015625 28.972562 33.226219 28.261719 34.949219 28.261719 z M 22.175781 28.265625 C 22.939781 28.263625 23.679672 28.532391 24.263672 29.025391 L 24.263672 28.433594 L 25.914062 28.433594 L 25.914062 35 L 24.261719 35 L 24.261719 34.378906 C 23.678719 34.871906 22.939781 35.141672 22.175781 35.138672 C 22.127781 35.139672 22.07825 35.139672 22.03125 35.138672 C 20.13325 35.098672 18.627969 33.526906 18.667969 31.628906 C 18.707969 29.730906 20.277781 28.225625 22.175781 28.265625 z M 22.267578 29.705078 C 21.163578 29.717078 20.278016 30.623563 20.291016 31.726562 C 20.303016 32.830562 21.2095 33.716125 22.3125 33.703125 L 22.308594 33.699219 L 22.330078 33.699219 C 23.421078 33.689219 24.297109 32.796078 24.287109 31.705078 L 24.287109 31.681641 C 24.275109 30.576641 23.370578 29.691078 22.267578 29.705078 z"/></svg>,
        'Map': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>,
        'Share': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"/></svg>,
    }

    console.log(name)
    return iconArray[name]
}

export default NetworkIcon