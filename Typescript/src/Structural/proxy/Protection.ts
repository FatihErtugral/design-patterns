const $display = document.querySelector('.proxy-protection') as HTMLElement;

class Internet {
    public async request(url: string) {
        $display.innerHTML += `\nreal request triggerred: ${url}`;
    }
}

class ProtectionProxy {
    private internet: Internet;
    private blackList = [
        'focus-hours.com'
    ];

    constructor (internet: Internet) {
        this.internet = internet;
    }

    public request = async (url: string) => {
        if (await this.checkAccess(url)) {
            await this.internet.request(url);
            this.sendLog(`\nLog: request sended ${url}`);
        } else {
            this.sendLog(`\nLog: access denied ${url}`)
        }
    }

    private checkAccess =  async (url: string) => {
        return !this.blackList.includes(url);
    }

    private sendLog = (log: string) => {
        $display.innerHTML += log;
    }
}

(async () => {
    const client = new ProtectionProxy(new Internet());

    await client.request('focus-hours.com');
    await client.request('google.com');
})();
