function LogoWhite({ Name,width,height }) {
    return (
        <div className="flex items-center text-[50px] font-semibold text-white">
            <svg width={width} height={height} viewBox="0 0 111 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4489 3.7529C32.0195 1.73394 36.5507 2.99176 38.5697 6.56233L52.6594 31.4803C54.6784 35.0509 53.4206 39.5821 49.85 41.601C46.2794 43.62 41.7482 42.3622 39.7292 38.7916L25.6395 13.8737C23.6205 10.3031 24.8783 5.77187 28.4489 3.7529Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M82.2195 57.2471C78.6489 59.2661 74.1177 58.0083 72.0988 54.4377L58.009 29.5197C55.99 25.9492 57.2479 21.418 60.8184 19.399C64.389 17.38 68.9202 18.6379 70.9392 22.2084L85.0289 47.1264C87.0479 50.697 85.7901 55.2282 82.2195 57.2471Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.49093 3.60959C10.0758 1.61607 14.5979 2.90609 16.5914 6.49093L39.1697 47.0922C41.1632 50.6771 39.8732 55.1992 36.2884 57.1927C32.7035 59.1862 28.1814 57.8962 26.1879 54.3114L3.60959 13.7101C1.61607 10.1253 2.90609 5.60311 6.49093 3.60959Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M104.177 57.3904C100.593 59.3839 96.0705 58.0939 94.077 54.5091L71.4987 13.9078C69.5052 10.3229 70.7952 5.80079 74.38 3.80727C77.9649 1.81375 82.487 3.10377 84.4805 6.68861L107.059 47.2899C109.052 50.8747 107.762 55.3969 104.177 57.3904Z" fill="white" />
                <path d="M48.3359 13.4563C46.4704 9.86465 47.8698 5.44084 51.4614 3.57541C55.053 1.70998 59.4768 3.10932 61.3423 6.70093C63.2077 10.2925 61.8083 14.7164 58.2167 16.5818C54.6251 18.4472 50.2013 17.0479 48.3359 13.4563Z" fill="white" />
                <path d="M62.3325 47.5438C64.198 51.1354 62.7986 55.5592 59.207 57.4246C55.6154 59.2901 51.1916 57.8907 49.3262 54.2991C47.4607 50.7075 48.8601 46.2837 52.4517 44.4183C56.0433 42.5528 60.4671 43.9522 62.3325 47.5438Z" fill="white" />
            </svg>

            {Name}
        </div>
    )
}

export default LogoWhite