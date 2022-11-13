declare module "local-devices" {

    function findLocalDevices(opts?: { address?: any, skipNameResolution?: boolean, arpPath?: string, port?: number }): Promise<findLocalDevices.IDevice[]>;

    namespace findLocalDevices
    {
        interface IDevice
        {
            name: string;
            ip: string;
            mac: string;
        }
    }

    export = findLocalDevices;
}
