---
title: "Awesome & Free Open Source Software Apps"
description: "Some free applications I personally use on a day to day basis."
publishDate: "24 Jan 2024"
tags: ["tech", "software", "linux", "windows", "android"]
---

Sometimes it's really hard to find software gems on the internet, especially since FOSS software is only really known about when looking for something specific, or via word of mouth. However, being at university for 4 years has allowed me to find some of these gems over the years, and hopefully expose you to some of the lesser-known software that everyone can benefit from.

I should mention that my current setup involves Windows, Linux, and Android, so cross-compatibility between them has been considered. As I don't own any apple products, you'll have to check if they are supported on MacOS or iOS (most will probably not).

## Xournal++

As I switched my 2-in-1 laptop's OS from Windows to Linux in university, I needed a way to annotate lecture slides that was cross-compatible with both Windows & Linux. My search led me to _Xournal++_.

_Xournal++_ allows you to import PDFs to annotate & draw over. While I didn't use its full functionality, being able to have essentially an electronic workbook was useful for writing answers for tutorial & workshops, answering assignments, annotating lectures, making note-sheets etc.

I personally only needed to use the pen & text tools to get my worth, as well as being able to paste images from the clipboard. You can also reposition everything in case to better fill the space with what you want.

- [Xournal++ Website](https://xournalpp.github.io/)

## yt-dlp & Tartube

Whether you are going on a trip or wanting to get some mp3s to listen to offline, sometimes you want to download YouTube videos. While there are a number of websites that allows you to download YouTube videos for music or otherwise, they tend to have limits, restrictions, or even serve malware[^1]. _yt-dlp_ is an executable that you can download onto your computer, specify the download options and the YouTube URL, and off you go!

However, as _yt-dlp_ requires you to use the CLI, it's not particularly friendly to those who are not used to the terminal. _Tartube_ is a graphical frontend for _yt-dlp_ or other such downloaders, providing a more user-friendly UI for people to configure and use _yt-dlp_.

- [yt-dlp GitHub Repo](https://github.com/yt-dlp/yt-dlp)
- [Tartube Website](https://tartube.sourceforge.io/)

[^1]: https://cybernews.com/malware/remove-ytmp3-cc-virus/

## KeepassXC & KeepassDX

In this day and age, password managers are a **highly** recommended to avoid hackers gaining access to your account, and to vary your passwords for each online service.

While you might be tempted to use a service like LastPass, these services storing a large number of passwords makes them a perfect target for data breaches, something that has happened[^2], and will continue to happen in the future.

Both _KeepassXC_ & _KeepassDX_ create an encrypted database file on your device which use the same database format (`.kdbx`), allowing for easy access between them, with KeepassXC being for Windows, Linux & MacOS, and KeepassDX being for Android. In addition, as the database file follows a standard, other apps can also access them in case the apps are no-longer maintained in the future. _KeePassXC_ event has a browser extension to autofill your passwords for you.

As the database file is encrypted, you can use any service like Google Drive or OneDrive to keep the database up-to-date and syncs across all of your devices.

- [KeePassXC Website](https://keepassxc.org/)
- [KeePassXC-broswer Github Repo](https://github.com/keepassxreboot/keepassxc-browser)
- [KeePassDX Website](https://www.keepassdx.com/)

[^2]: https://blog.lastpass.com/2023/03/security-incident-update-recommended-actions/

### Creating a Master Passphrase

Now I know for some folks, making a secure but rememberable password is something struggle with, so here is a quick how-to for those interested.

In summary, we'll be using a passphrase which this xkcd comic explains quite well:
![xkcd comic 936, Password Strength](https://imgs.xkcd.com/comics/password_strength.png)

All you need is a 6-sided die (ideally 5 to make passphrase generation to go faster), and a piece of paper with a pen. Roll the die and jot down the number until you have 5 numbers in a row (like `53143`). Then take your number, find the corresponding word from the number from a [word list](https://www.eff.org/document/passphrase-wordlists) (in this case `savage`), and repeat. I'd recommend repeating until you have 5 or more words (more is better). Make sure you separate each word with a space, underscore, hyphen, etc. to preserve entropy, and you have a passphrase.

## F-Droid

_F-droid_ is an app store (like Google Play), focused on FOSS Android apps, helping you keep track of updates, so you don't have to install `.apk` files every time there is a new update. Note that it can take a while for an update to be available on _F-droid_, as _F-droid_ builds the apps from source themselves. You might also find some apps that you yourself might find useful that I haven't even mentioned here!

- [F-Droid Website](https://f-droid.org/)

## AdAway

_AdAway_ is a local DNS sinkhole for your phone, which means it can block connections to certain servers that serve ads, trackers or malware. Note that this will use your phones VPN slot if your phone isn't rooted (which it shouldn't be if it's your daily driver for security), which means you can't use it with a VPN. Whenever an app or a website tries to call a server on the block list, _AdAway_ simple blocks the server from connecting. Its great if you can't be bothered going into airplane mode to block ads from showing up in your Android apps.

- [AdAway Website](https://adaway.org/)

## NewPipe

_NewPipe_ is like Tartube for your phone but allows you to play videos as if you were on the YouTube app without downloading them. You can also download videos to your phone and have free access to the video file. It also doesn't load ads and has some other nice quality of life features, like having videos keep playing if you unfocused the app.

- [NewPipe Website](https://newpipe.net/)

## Aegis Authenticator

An open source f2a app. It allows you to encrypt access to your f2a, requiring either a password or biometric to unlock. It also includes a backup feature so you can restore your f2a's if your phone dies or gets lost. It also supports other f2a methods, like Steam.

- [Aegis Authenticator Website](https://getaegis.app/)

## K-9 Mail

In 2022, K-9 Mail joined the Thunderbird family, so this will eventually be renamed to Thunderbird on Android at some point.

It's an email client for your phone, allowing you to connect multiple emails from different providers so they are now all under one app; a wonderful complimentary addition to [Mozilla Thunderbird](https://www.thunderbird.net/) itself.

- [K-9 Mail Website](https://k9mail.app/)
