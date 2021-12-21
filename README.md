
# Prepare 	
Git clone `whatsdapp-lib` and run `npm run dist`.

Place this folder next to `whatsdapp-lib` folder:
```
some_folder
  ├ whatsdapp-lib
  ├ whatsdapp-test-for-spectaprod
```

Goto `whatsdapp-test-for-spectaprod` and run `npm i`.

_Alternatively you can change the `package.json`, change dependency `whatsdapp` into `"whatsdapp": "^1.0.9",` and run `npm i`._

# Give Credentials
Edit in `MNEMONIC` and toppedup `IDENTITY` in `testWhatsDapp.js`.

# Run
Run `node testWhatsDapp.js`

# Troubleshoot
If it crahses due to `Error: Merkle root from the diff doesn't match calculated merkle root after diff is applied` since it emits an exit event, we can't do anything.
But it says this error is fixed in `dash-sdk` `v0.22-dev` but we did not tested yet.