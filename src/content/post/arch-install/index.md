---
title: "Installing Arch Linux, a guided walkthrough"
description: "A guide to installing Arch linux in a way thats a bit more guided, and can be used as a reference point"
publishDate: "22 Feb 2023"
tags: ["tech", "Arch", "IT"]
draft: true
---

_NOTICE: Always cross-reference the [Arch Linux Wiki](https://wiki.archlinux.org/) for the most up-to-date information._

## Installing Arch

Installing Arch is a rather daunting task for most beginner, considering it a rather large step up from what you might have already used, like Ubuntu. This guide hopes to help simplfy the sheer amount of information provided by the wiki into a more directed guide in the way I like to configure my system, both for new folk, and also as a reference for myself. If you do want to follow along, I'd strongly recommend booting up a VM in your prefered software and make snapshots along the way. I won't cover everything in detail & you'll most likely have to troubleshoot as things diverge, so make sure you also have the [Arch wiki installation guide](https://wiki.archlinux.org/title/Installation_guide) in another tab for easy reference.

## Objectives

Once you've finished with installing & configuring everything, this will be the main points on our system:

- Full disk encryption outside of the boot partition
- 2 LVM volumes, one for `/home`, and the other for `/`
- Systemd-boot as the bootloader
- KDE plasma has the desktop enviroment
- Secure boot enabled

If you don't know what any of that means, don't worry, I'll explain on the way. So lets get started!

## Pre-installation

Before we install anything to the disk, we need to prepare our USB & computer.

### Acquire the installation image

Head to the arch wiki [downloads](https://archlinux.org/download/) page & grab the ISO and flash the image to a USB. [Rufus](https://rufus.ie) is a good pick, or try [Ventoy](https://www.ventoy.net) if you like having a dedicated USB with many types of ISOs. You'll need to disable secure boot in the UEFI/BIOS, as well as change the boot order to load the arch install from the USB.

### Connecting the internet

Ah, the bane of Arch laptop users everywhere. Now if your using Ethernet or a VM, you should have internet already (`ping -c 5 archlinux.org` to verify)can move onto the next step; if your using Wi-Fi, lets get you up and running.
We'll be using [iwctl](https://wiki.archlinux.org/title/Iwd#iwctl) to help us connect. First we'll need to make sure its daemon is running, then start the interactive prompt:

```
$ systemctl start iwd
$ iwctl
```

From here, we'll need to see what adaptors are avaliable:

```
[iwd]# device list
```

Pick an adaptor (like `wlan0` for example if its there), when run the following commands:

```
[iwd]# station <device> scan
[iwd]# station <device> get-networks
```

This will print out a lit of avaliable wifi networks. Connect to your Wi-Fi network. You'll be prompted to supply a password if needed.

```
[iwd]# station <device> connect <SSID>
```

Once you're connected exit out of the prompt and verify you have internet access:

```
[iwd]# exit
$ ping -c 5 archlinux.org
```

If everything is working, we can move on.

### Partitioning the disk

to-do
