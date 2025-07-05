# Issue: TeamSpeak Silencing everyone

TeamSpeak channels will silence users once more than **100** clients are connected. To fix this:

1. Right-click your TeamSpeak server
2. Click `Edit Virtual Server`
3. Click `More`
4. Go to the `Misc` tab
5. Change the value of `Min clients in channel before silence` to a value above your server’s expected player count
