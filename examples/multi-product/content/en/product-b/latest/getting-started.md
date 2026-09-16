---
title: 'Getting started'
description: 'Install and start Product B'
weight: 10
---

# Install

Install Product B, then start it.

# Test with tables

## Inhalt

- [Base Image (usp/oneplt/fcos, Fedora Core OS)](#base-image-usponepltfcos-fedora-core-os)
- [Additional Containers built by USP](#additional-containers-built-by-usp)
- [Ansible Playbooks Defaults](#ansible-playbooks-defaults)

## Base Image (usp/oneplt/fcos, Fedora Core OS)

|  |  |  |  |
|----|----|----|----|
| Release | Release Date | Fedora Core OS Release | Changes |
|  |  | 44.20260720.3.1 | FCOS Upgrade ([CVE-2026-53359: Januscape](https://github.com/coreos/fedora-coreos-tracker/issues/2183), [CVE-2026-53362: IPV6_FRAG_ESCAPE vulnerability](https://github.com/coreos/fedora-coreos-tracker/issues/2177), [CVE-2026-46242: Bad Epoll (LPE)](https://github.com/coreos/fedora-coreos-tracker/issues/2190)) |
| [0.20260419.0](https://nexus-bob.u-s-p.local/repository/docker-public/v2/usp/oneplt/fcos/manifests/0.20260419.0) | 04.06.2026 | 44.20260419.3.1 | FCOS Upgrade ([CVE-2026-43284, CVE-2026-43500.CVE: Dirty Frag and Copy Fail 2, local privilege escalation](https://github.com/coreos/fedora-coreos-tracker/issues/2142)) |
| [0.20260413.0](https://nexus-bob.u-s-p.local/repository/docker-public/v2/usp/oneplt/fcos/manifests/0.20260413.0) | 05.05.2026 | 43.20260413.3.2 | FCOS Upgrade ([CVE-2026-31431: copy fail local privilege escalation](https://github.com/coreos/fedora-coreos-tracker/issues/2140)) |
| [0.20260105.0](https://nexus-bob.u-s-p.local/repository/docker-public/v2/usp/oneplt/fcos/manifests/0.20260105.0) | 22.01.2026 | 43.20260105.3.0 | FCOS Upgrade |
| [0.20250705.0](https://nexus-bob.u-s-p.local/repository/docker-public/v2/usp/oneplt/fcos/manifests/0.20250705.0) | 04.08.2025 | 42.20250705.3.0 | FCOS Upgrade |
| [0.20250609.0](https://nexus-bob.u-s-p.local/repository/docker-public/v2/usp/oneplt/fcos/manifests/0.20250609.0) | 04.07.2025 | 42.20250609.3.0 | FCOS Upgrade |
| [0.20250609.0](https://nexus-bob.u-s-p.local/repository/docker-public/v2/usp/oneplt/fcos/manifests/0.20250609.0) | 30.05.2025 | 42.20250410.3.2 | Package python3-docker added |
| [0.20250410.0](https://nexus-bob.u-s-p.local/repository/docker-public/v2/usp/oneplt/fcos/manifests/0.20250410.0) | 08.05.2025 | 42.20250410.3.2 | FCOS Update |

## Additional Containers built by USP

|  |  |  |  |  |
|----|----|----|----|----|
| Container name | Release | Release Date | Origin | Changes |
| usp/oneplt/file-watcher |  |  |  |  |
|  | 0.1.1 | 25.02.2026 | alpine:3.23 | Alpine release update |
|  | 0.1.0 | 05.06.2024 | alpine:3.20 | Initial release |
| usp/oneplt/logstash |  |  |  |  |
|  | 9.5.1 | TBD | logstash:9.5.1 |  |
|  | 9.3.5 | 29.05.2026 | logstash:9.3.5 /redhat/ubi9-minimal:latest | syslog output plugin updated to 3.1.0 |
|  | 9.3.1-1 | 02.03.2026 | logstash:9.3.1 /redhat/ubi9-minimal:latest | fix incored send_nsca.conf ownership |
|  | 9.3.1 | 02.03.2026 | logstash:9.3.1 /redhat/ubi9-minimal:latest | Logstash release update / fix missing send_nsca binary |
|  | 9.3.0 | 25.02.2026 | logstash:9.3.0 / redhat/ubi9-minimal:latest | Logstash release update / change from Ubuntu to RedHat UBI 9 |
|  | 8.14.3 | 19.05.2025 | logstash:8.14.3 / ubuntu:20.04 | Logstash release update |
|  | 8.12.2 | 14.08.2024 | logstash:8.12.2 / ubuntu:20.04 | Initial release |
| usp/oneplt/mppw |   |   |  |  |
|  | 0.3.1 | 25.02.2026 | alpine:3.23 | Alpine release update |
|  | 0.3.0 | 14.08.2024 | alpine:3.20 | Initial release |

## Ansible Playbooks Defaults

The container versions can be adjusted in the ansible inventory configuration! The versions defined here are tested and are working with the configuration provided by the ansible playbook.

<table class="wrapped relative-table confluenceTable" style="width: 117.255%;">
<colgroup>
<col style="width: 12%" />
<col style="width: 5%" />
<col style="width: 5%" />
<col style="width: 4%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 6%" />
<col style="width: 4%" />
</colgroup>
<tbody>
<tr>
<th rowspan="2" class="confluenceTh" style="text-align: left; vertical-align: middle;">Ansible Playbooks</th>
<th class="confluenceTh" style="text-align: left;">Release</th>
<th class="confluenceTh" style="text-align: left;">&lt;next&gt;</th>
<th class="confluenceTh" style="text-align: left;">f5d89551</th>
<th class="confluenceTh" style="text-align: left;">7c67c6db</th>
<th class="confluenceTh" style="text-align: left;"><p>68c125fc</p></th>
<th class="confluenceTh" style="text-align: left;"><p>b089cc17</p></th>
<th class="confluenceTh" style="text-align: left;"><p>be48625a</p></th>
<th class="confluenceTh" style="text-align: left;"><p>b142c3cc</p></th>
<th class="confluenceTh" style="text-align: left;"><p>f3e07f53</p></th>
<th class="confluenceTh" style="text-align: left;">efe06fe6</th>
<th class="confluenceTh" style="text-align: left;">eac7dae3</th>
<th class="confluenceTh" style="text-align: left;">b245e919</th>
<th class="confluenceTh" style="text-align: left;">2b737d72</th>
<th class="confluenceTh" style="text-align: left;">Intial</th>
</tr>
<tr>
<th class="confluenceTh" style="text-align: left;">Release Date</th>
<th class="confluenceTh" style="text-align: left;">&lt;tbd&gt;</th>
<th class="confluenceTh" style="text-align: left;">22.06.2026</th>
<th class="confluenceTh" style="text-align: left;">01.06.2026</th>
<th class="confluenceTh" style="text-align: left;">19.05.2026</th>
<th class="confluenceTh" style="text-align: left;">03.03.2026</th>
<th class="confluenceTh" style="text-align: left;">25.02.2026</th>
<th class="confluenceTh" style="text-align: left;">22.08.2025</th>
<th class="confluenceTh" style="text-align: left;">14.08.2025</th>
<th class="confluenceTh" style="text-align: left;">18.03.2025</th>
<th class="confluenceTh" style="text-align: left;">02.12.2024</th>
<th class="confluenceTh" style="text-align: left;">20.11.2024</th>
<th class="confluenceTh" style="text-align: left;">22.10.2024</th>
<th class="confluenceTh" style="text-align: left;">-</th>
</tr>
<tr>
<th class="confluenceTh" style="text-align: left;">Container</th>
<th class="confluenceTh" style="text-align: left;">Vendor</th>
<th class="confluenceTh" style="text-align: center;"><br />
</th>
<th class="confluenceTh" style="text-align: center;"><br />
</th>
<th colspan="11" class="confluenceTh" style="text-align: center;">Container Release</th>
</tr>
&#10;<tr>
<td class="confluenceTd" style="text-align: left;">fluent/fluent-bit</td>
<td class="confluenceTd" style="text-align: left;">Fluentbit</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">5.1.1</td>
<td class="confluenceTd" style="text-align: left;"><br />
</td>
<td class="confluenceTd" style="text-align: left;">4.2.2</td>
<td class="confluenceTd" style="text-align: left;"> 4.2.2</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.2.2</strong></td>
<td class="confluenceTd" style="text-align: left;">3.1.9</td>
<td class="confluenceTd" style="text-align: left;">3.1.9</td>
<td class="confluenceTd" style="text-align: left;">3.1.9</td>
<td class="confluenceTd" style="text-align: left;">3.1.9</td>
<td class="confluenceTd" style="text-align: left;">3.1.9</td>
<td class="confluenceTd" style="text-align: left;">3.1.9</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>3.1.9</strong></td>
<td class="confluenceTd" style="text-align: left;">3.1.7</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">kamermans/docker-megacli</td>
<td class="confluenceTd" style="text-align: left;">Kamermans</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> 1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0 </td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
<td class="confluenceTd" style="text-align: left;">1.0</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">maxmindinc/geoipupdate</td>
<td class="confluenceTd" style="text-align: left;">Maxmind</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1 </td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
<td class="confluenceTd" style="text-align: left;">v7.1.1</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">opensearchproject/opensearch</td>
<td class="confluenceTd" style="text-align: left;">Opensearch</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">3.8.0</td>
<td class="confluenceTd" style="text-align: left;"><br />
</td>
<td class="confluenceTd" style="text-align: left;">3.4.0</td>
<td class="confluenceTd" style="text-align: left;">3.4.0 </td>
<td class="confluenceTd" style="text-align: left;">3.4.0</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>3.4.0</strong></td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>2.18.0</strong></td>
<td class="confluenceTd" style="text-align: left;">2.17.1</td>
<td class="confluenceTd" style="text-align: left;">2.17.1</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">opensearchproject/opensearch-dashboards</td>
<td class="confluenceTd" style="text-align: left;">Opensearch</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">3.8.0</td>
<td class="confluenceTd" style="text-align: left;"><br />
</td>
<td class="confluenceTd" style="text-align: left;">3.4.0</td>
<td class="confluenceTd" style="text-align: left;">3.4.0</td>
<td class="confluenceTd" style="text-align: left;">3.4.0</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>3.4.0</strong></td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="confluenceTd" style="text-align: left;">2.18.0</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>2.18.0</strong></td>
<td class="confluenceTd" style="text-align: left;">2.17.1</td>
<td class="confluenceTd" style="text-align: left;">2.17.1</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">pnnlmiscscripts/ipmitool</td>
<td class="confluenceTd" style="text-align: left;">Pnnl</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">1.8.18-10</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> 1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;"> 1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
<td class="confluenceTd" style="text-align: left;">1.8.18-8</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/aero/waap/usp-aero-waap-gateway-standalone</td>
<td class="confluenceTd" style="text-align: left;">USP</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">0.5.0</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> 0.0.3</td>
<td class="confluenceTd" style="text-align: left;"> 0.0.3</td>
<td class="confluenceTd" style="text-align: left;">0.0.3</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>0.0.3</strong></td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>0.0.2</strong></td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>0.0.1-snapshot</strong></td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">-</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/core/hsp/hsp-sel</td>
<td class="confluenceTd" style="text-align: left;">USP</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">4.28.0.0</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.27.0.7</strong></td>
<td class="confluenceTd" style="text-align: left;"> 4.27.0.6</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.27.0.6</strong></td>
<td class="confluenceTd" style="text-align: left;">4.27.0.4</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.27.0.4</strong></td>
<td class="confluenceTd" style="text-align: left;">4.26.0.7</td>
<td class="confluenceTd" style="text-align: left;">4.26.0.7</td>
<td class="confluenceTd" style="text-align: left;">4.26.0.7</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.26.0.7</strong></td>
<td class="confluenceTd" style="text-align: left;">4.25.0.6</td>
<td class="confluenceTd" style="text-align: left;">4.25.0.6</td>
<td class="confluenceTd" style="text-align: left;">4.25.0.6</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/core/hsp/hsp-sem</td>
<td class="confluenceTd" style="text-align: left;">USP</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">4.28.0.0</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.27.0.7</strong></td>
<td class="confluenceTd" style="text-align: left;"> 4.27.0.6</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.27.0.6</strong></td>
<td class="confluenceTd" style="text-align: left;">4.27.0.4</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.27.0.4</strong></td>
<td class="confluenceTd" style="text-align: left;">4.26.0.7</td>
<td class="confluenceTd" style="text-align: left;">4.26.0.7</td>
<td class="confluenceTd" style="text-align: left;">4.26.0.7</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>4.26.0.7</strong></td>
<td class="confluenceTd" style="text-align: left;">4.25.0.6</td>
<td class="confluenceTd" style="text-align: left;">4.25.0.6</td>
<td class="confluenceTd" style="text-align: left;">4.25.0.6</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/core/sls/sls</td>
<td class="confluenceTd" style="text-align: left;">USP</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">5.20.0.9</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> 5.20.0.5</td>
<td class="confluenceTd" style="text-align: left;"> 5.20.0.5</td>
<td class="confluenceTd" style="text-align: left;">5.20.0.5</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>5.20.0.5</strong></td>
<td class="confluenceTd" style="text-align: left;">5.18.0.0</td>
<td class="confluenceTd" style="text-align: left;">5.18.0.0</td>
<td class="confluenceTd" style="text-align: left;">5.18.0.0</td>
<td class="confluenceTd" style="text-align: left;">5.18.0.0</td>
<td class="confluenceTd" style="text-align: left;">5.18.0.0</td>
<td class="confluenceTd" style="text-align: left;">5.18.0.0</td>
<td class="confluenceTd" style="text-align: left;">5.18.0.0</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/core/waap</td>
<td class="confluenceTd" style="text-align: left;">USP</td>
<td class="confluenceTd" style="text-align: left;"> -</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> -</td>
<td class="confluenceTd" style="text-align: left;"> -</td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">-</td>
<td class="confluenceTd" style="text-align: left;">1.1.8</td>
<td class="confluenceTd" style="text-align: left;">1.1.8</td>
<td class="confluenceTd" style="text-align: left;">1.1.8</td>
<td class="confluenceTd" style="text-align: left;">1.1.8</td>
<td class="confluenceTd" style="text-align: left;">1.1.8</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/oneplt/file-watcher</td>
<td class="confluenceTd" style="text-align: left;">USP</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> 0.1.1</td>
<td class="confluenceTd" style="text-align: left;"> 0.1.1</td>
<td class="confluenceTd" style="text-align: left;">0.1.1</td>
<td class="confluenceTd" style="text-align: left;"><strong>0.1.1</strong></td>
<td class="confluenceTd" style="text-align: left;">0.1.0</td>
<td class="confluenceTd" style="text-align: left;">0.1.0</td>
<td class="confluenceTd" style="text-align: left;">0.1.0</td>
<td class="confluenceTd" style="text-align: left;">0.1.0</td>
<td class="confluenceTd" style="text-align: left;">0.1.0</td>
<td class="confluenceTd" style="text-align: left;">0.1.0</td>
<td class="confluenceTd" style="text-align: left;">0.1.0</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/oneplt/logstash</td>
<td class="confluenceTd" style="text-align: left;">Elastic</td>
<td class="highlight-#fffae6 confluenceTd" style="text-align: left;" data-highlight-colour="#fffae6">9.5.1</td>
<td class="confluenceTd" style="text-align: left;"><strong> </strong></td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong> 9.3.5</strong></td>
<td class="confluenceTd" style="text-align: left;"> 9.3.1-1</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>9.3.1-1</strong></td>
<td class="confluenceTd" style="text-align: left;"><strong>9.3.0</strong></td>
<td class="confluenceTd" style="text-align: left;">8.14.3</td>
<td class="confluenceTd" style="text-align: left;">8.14.3</td>
<td class="highlight-#abf5d1 confluenceTd" style="text-align: left;" data-highlight-colour="#abf5d1"><strong>8.14.3</strong></td>
<td class="confluenceTd" style="text-align: left;">8.12.2</td>
<td class="confluenceTd" style="text-align: left;">8.12.2</td>
<td class="confluenceTd" style="text-align: left;">8.12.2</td>
<td class="confluenceTd" style="text-align: left;">8.12.2</td>
</tr>
<tr>
<td class="confluenceTd" style="text-align: left;">usp/oneplt/mppw</td>
<td class="confluenceTd" style="text-align: left;">USP</td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> </td>
<td class="confluenceTd" style="text-align: left;"> 0.3.1</td>
<td class="confluenceTd" style="text-align: left;"> 0.3.1</td>
<td class="confluenceTd" style="text-align: left;">0.3.1</td>
<td class="confluenceTd" style="text-align: left;"><strong>0.3.1</strong></td>
<td class="confluenceTd" style="text-align: left;">0.3.0</td>
<td class="confluenceTd" style="text-align: left;">0.3.0</td>
<td class="confluenceTd" style="text-align: left;">0.3.0</td>
<td class="confluenceTd" style="text-align: left;">0.3.0</td>
<td class="confluenceTd" style="text-align: left;">0.3.0</td>
<td class="confluenceTd" style="text-align: left;">0.3.0</td>
<td class="confluenceTd" style="text-align: left;">0.3.0</td>
</tr>
</tbody>
</table>

